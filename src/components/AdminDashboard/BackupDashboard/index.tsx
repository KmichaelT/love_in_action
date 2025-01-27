import './index.scss'
import { del } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import { createBackup, listBackups, restoreBackup } from './actions';
import { User } from 'payload'

import { Button, Popup, Collapsible } from '@payloadcms/ui'
import { isAdminHidden } from '@/access/isAdmin';
import { I18n } from '@payloadcms/translations';
import Link from 'next/link';
import { getCurrentDbName, getCurrentHostname, transformBlobName } from './utils';

interface BackupDashboardProps {
  user: User | null,
  i18n: I18n,
  searchParams: Record<string, string>
}

const SEED_DUMP_URL = 'https://nki0hmsryjcqaqtw.public.blob.vercel-storage.com/backups/cron-backup-1737774039239-XgTDnyBINssrxZm8OBAY3lBvj9AZCX.json';

const BackupDashboard: React.FC<BackupDashboardProps> = async ({ user, i18n, searchParams }) => {
  if (!user) return;

  if (isAdminHidden({ user })) {
    return;
  }

  if (!process.env.MONGODB_URI || !process.env.BLOB_READ_WRITE_TOKEN) {
    return;
  }
  const blobs = await listBackups();
  const showOtherDb = searchParams.showOtherDb === 'true';
  const showOtherHostname = searchParams.showOtherHostname === 'true';


  const currentHostname = getCurrentHostname();
  const currentDbName = getCurrentDbName();

  const countOtherDb = blobs.filter((blob) => {
    const { dbName } = transformBlobName(blob.pathname);
    return currentDbName !== dbName;
  }).length;

  const countOtherHostname = blobs.filter((blob) => {
    const { hostname } = transformBlobName(blob.pathname);
    return currentHostname !== hostname;
  }).length;

  return (
    <div className="backup-dashboard">
      <h2>Backups</h2>

      <Collapsible initCollapsed={true}>

        <div className='backup-filter-group'>
          {countOtherDb > 0 && <Link className="btn btn--icon-style-without-border btn--size-medium btn--withoutPopup btn--style-primary btn--withoutPopup" href={{
            search: new URLSearchParams({
              ...searchParams,
              showOtherDb: showOtherDb ? 'false' : 'true',
            }).toString(),
          }}>{showOtherDb ? 'Hide other DBs' : 'Show other DBs'}</Link>}

          {countOtherHostname > 0 && <Link className="btn btn--icon-style-without-border btn--size-medium btn--withoutPopup btn--style-primary btn--withoutPopup" href={{
            search: new URLSearchParams({
              ...searchParams,
              showOtherHostname: showOtherHostname ? 'false' : 'true',
            }).toString(),
          }}>{showOtherHostname ? 'Hide other Hostnames' : 'Show other Hostnames'}</Link>}

          <Popup
            className='btn-right'
            button={
              <div className="btn btn--icon-style-without-border btn--size-medium btn--withoutPopup btn--style-primary btn--withoutPopup">
                Seed DB
              </div>
            }
          >
            <div>
              Seeding your DB will override some of your existing data. Are you sure you want to continue?
            </div>
            <Button className="btn-red" onClick={async () => {
              "use server"
              await restoreBackup(SEED_DUMP_URL, ['users', 'roles']);
              revalidatePath('/admin');
            }}>
              Yes
            </Button>
          </Popup>
        </div>


        {blobs.map((blob) => {
          const { type, dbName, hostname } = transformBlobName(blob.pathname);

          const isCurrentDb = currentDbName === dbName;
          const isCurrentHostname = currentHostname === hostname;

          if (!(showOtherDb || isCurrentDb)) return;
          if (!(showOtherHostname || isCurrentHostname)) return;

          return (
            <div key={blob.pathname} className='backup-item'>
              <p>
                <span>{new Date(blob.uploadedAt).toLocaleString(i18n?.language || 'en')}: {type === 'cron' ? 'Cron Backup' : 'Manual Backup'}, </span>
                <span className={isCurrentDb ? '' : 'red-text'}>DB: {dbName || 'Unknown'}, </span>
                <span className={isCurrentHostname ? '' : 'red-text'}>Host: {hostname || 'Unknown'}, </span>
                <span>({blob.size} bytes)</span>
              </p>
              <div className='right'>
                <a
                  className="btn btn--icon-style-without-border btn--size-medium btn--withoutPopup btn--style-primary btn--withoutPopup"
                  href={blob.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  Download Backup
                </a>
                <Popup
                  className='btn-right'
                  button={
                    <div className="btn btn--icon-style-without-border btn--size-medium btn--withoutPopup btn--style-primary btn--withoutPopup">
                      Restore Backup
                    </div>
                  }
                >
                  <div>
                    Restoring this Backup will may override some of your newly created data. Are you sure you want to continue?
                  </div>
                  <Button className="btn-red" onClick={async () => {
                    "use server"
                    await restoreBackup(blob.downloadUrl);
                    revalidatePath('/admin');
                  }}>
                    Yes
                  </Button>
                </Popup>
                <Popup
                  button={
                    <div className="btn btn--icon-style-without-border btn--size-medium btn--withoutPopup btn--style-primary btn--withoutPopup">
                      Delete Backup
                    </div>
                  }
                >
                  <div>
                    Are you sure you want to delete this backup?
                  </div>
                  <Button className="btn-red" onClick={async () => {
                    "use server"
                    await del(blob.url);
                    revalidatePath('/admin');
                  }}>
                    Yes
                  </Button>
                </Popup>
              </div>
            </div>
          );
        })}
        <div className="make-backup-container">
          <Button onClick={async () => {
            "use server"
            await createBackup();
            revalidatePath('/admin');
          }}>Create manual Backup</Button>
          <span className='text'>Manual backups will not get automatically deleted</span>
        </div>
      </Collapsible>
    </div>
  )
}

export default BackupDashboard
