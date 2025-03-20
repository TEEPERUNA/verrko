import React from 'react';

export default function StyledInput({ label, ...props }) {
  return (
    <div>
      <label className="block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300">
        {label}
      </label>
      <input
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300"
        {...props}
      />
    </div>
  );
}
