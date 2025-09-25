let runtimeConfig: any

/**
 * @deprecated Runtime config is deprecated and will be removed in Next.js 16.
 */
export default () => {
  // Don't use picocolors here to isolate the external dependency.
  console.warn(
    `Detected the usage of runtime config. Runtime config is deprecated and will be removed in Next.js 16.`
  )
  return runtimeConfig
}

/**
 * @deprecated Runtime config is deprecated and will be removed in Next.js 16.
 */
export function setConfig(configValue: any): void {
  // Don't use picocolors here to isolate the external dependency.
  console.warn(
    `Detected the usage of runtime config \`setConfig()\`. Runtime config is deprecated and will be removed in Next.js 16.`
  )
  runtimeConfig = configValue
}
