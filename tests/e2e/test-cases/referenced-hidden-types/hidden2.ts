const hidden = '' as const;

interface Hidden {
  type?: typeof hidden;
}

export default function (value: Hidden): typeof hidden {
  return value.type ?? hidden;
};
