const hidden = 0 as const;

interface Hidden {
  type?: typeof hidden;
}

export default function test(value: Hidden): typeof hidden{
  return value?.type ?? hidden;
};
