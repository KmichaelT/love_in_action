"use client"
import * as React from 'react';
import { SelectInput, useField, useWatchForm } from '@payloadcms/ui';
import { useEffect, useState } from 'react';

export type OptionsData = Record<string, {
  label: string;
  value: string;
}[]>;

type CustomSelectProps = {
  path: string;
  options: OptionsData;
}

const SectionSelect: React.FC<CustomSelectProps> = ({ path, options }) => {
  const { getDataByPath } = useWatchForm();
  const formState: { reference?: { value?: string } } = getDataByPath(path.replace(/\.section$/, ""));
  const { value, setValue, } = useField<string>({ path })

  // Reset form field if parent selection changes
  const [initialRender, setInitialRender] = useState(true);
  useEffect(() => {
    setInitialRender(false);
  }, [])
  useEffect(() => {
    if (!initialRender) {
      setValue("")
    }
  }, [formState?.reference?.value])

  if (!formState?.reference?.value) {
    return (
      <div className="field-description">
        Make parent selection first
      </div>
    )
  }
  if (!options[formState?.reference?.value]) {
    return (
      <div className="field-description">
        No options for sublink available. Create a block on this page first.
      </div>
    )
  }

  return (
    <div className='field-type select'>
      <label className="field-label">
        Section inside Document (optional)
      </label>
      <SelectInput
        key={formState?.reference?.value + value}
        path={path}
        name={path}
        options={options[formState?.reference?.value] || []}
        value={value}
        onChange={(e) => setValue((e as any)?.value || "")}
      />
      <div className="field-description">
        Select a block from the referenced page to link to
      </div>
    </div>
  )
}

export default SectionSelect