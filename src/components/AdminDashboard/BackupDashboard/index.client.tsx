'use client'

import { useRouter, useSearchParams } from 'next/navigation'

interface FilterControlsProps {
  countOtherDb: number
  countOtherHostname: number
  showOtherDb: boolean
  showOtherHostname: boolean
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  countOtherDb,
  countOtherHostname,
  showOtherDb,
  showOtherHostname,
}) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateSearchParams = (key: string, value: boolean) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(key, value.toString())
    router.replace(`?${params.toString()}`, {
      scroll: false
    })
  }

  return (
    <div className='backup-filter-group'>
      {countOtherDb > 0 && (
        <div className="field-type checkbox">
          <input
            id="showOtherDb"
            type="checkbox"
            className="checkbox-input__input"
            checked={showOtherDb}
            onChange={(e) => {
              updateSearchParams('showOtherDb', e.target.checked)
            }}
          />
          <label
            htmlFor="showOtherDb"
            className="field-label"
          >
            Show other DBs
          </label>
        </div>
      )}

      {countOtherHostname > 0 && (
        <div className="field-type checkbox">
          <input
            id="showOtherHostname"
            type="checkbox"
            className="checkbox-input__input"
            checked={showOtherHostname}
            onChange={(e) => {
              updateSearchParams('showOtherHostname', e.target.checked)
            }}
          />
          <label
            htmlFor="showOtherHostname"
            className="field-label"
          >
            Show other Hostnames
          </label>
        </div>
      )}
    </div>
  )
}
