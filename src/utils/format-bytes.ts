export const formatBytes = (bytes: number) => {
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  let values = bytes
  let unityIndex = 0

  while (values >= 1024 && unityIndex < sizes.length - 1) {
    values /= 1024
    unityIndex++
  }

  return `${values.toFixed(1)} ${sizes[unityIndex]}`
}
