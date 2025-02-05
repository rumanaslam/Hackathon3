export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skB9oFuton7EoEHTOZ4iVWEk48yxExfRp2cAiYk2TuVnyQx8WeeG0YIMlYuWRWcU5DZqwu9hw41PidzmVpAVmGaGcaAMpAHYZ2pCFLbH2z3rPxvjCVM7eomJvee9VSb8QqxeXKCLiYpKtinqnzJ8bpZYZheyauklwiQ7zqhnTN9HUjBrlEPH",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
