export function expect<T>(expected: T) {
  return {
    toBe(result: T) {
      if (result === expected) {
      } else {
        throw new Error(`${result} is not equal to ${expected}`)
      }
    },
  }
}

type Callback = () => Promise<void> | void

export async function test(description: string, callback: Callback) {
  try {
    await callback()
    console.log(`✔ ${description}`)
  } catch (error) {
    console.log(`❌ ${description}`)
    console.log(error)
  }
}

export const it = test

export async function describe(description: string, callback: Callback) {
  console.log(description)
  await callback()
}
