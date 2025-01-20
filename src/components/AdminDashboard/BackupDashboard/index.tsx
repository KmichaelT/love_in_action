import './index.scss'
import { del, list } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import { createBackup, restoreBackup } from './actions';
import { User } from 'payload'

import { Button, Popup, Collapsible } from '@payloadcms/ui'
import { isAdminHidden } from '@/access/isAdmin';

interface BackupDashboardProps {
  user: User | null
}

const BeforeDashboard: React.FC<BackupDashboardProps> = async ({ user }) => {

  if (!user) return;
  
  if (isAdminHidden({ user })) {
    return;
  }

  if (!process.env.MONGODB_URI || !process.env.BLOB_READ_WRITE_TOKEN) {
    return;
  }
  const { blobs } = await list({
    prefix: 'backups/',
    limit: 1000,
  });
  return (
    <div className="backup-dashboard">
      <h2>Backups</h2>
      <Collapsible initCollapsed={true}>
        {blobs.map((blob) => (
          <div key={blob.pathname} className='backup-item'>
            <p>{new Date(blob.uploadedAt).toLocaleString()}: {blob.pathname.includes('cron-') ? 'Cron Backup' : 'Manual Backup'} ({blob.size} bytes)</p>
            <div className='right'>
              <a
                className="btn btn--icon-style-without-border btn--size-medium btn--withoutPopup btn--style-primary btn--withoutPopup"
                href={blob.downloadUrl}
                target="_blank"
                rel="noopener noreferrer">
                Download Backup
              </a>
              <Button onClick={async () => {
                "use server"
                await restoreBackup(blob.downloadUrl);
                revalidatePath('/admin');
                return;
              }}>
                Restore Backup
              </Button>
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
        ))}
        <div className="make-backup-container">
          <Button onClick={async () => {
            "use server"
            await createBackup();
            revalidatePath('/admin');
          }}>Create manual Backup</Button>
          <span className='text'>This backup will not get automatically deleted</span>
        </div>
      </Collapsible>
    </div>
  )
}

export default BeforeDashboard
