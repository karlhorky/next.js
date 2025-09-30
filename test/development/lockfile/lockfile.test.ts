import { nextTestSetup } from 'e2e-utils'
import execa from 'execa'
import stripAnsi from 'strip-ansi'

describe('lockfile', () => {
  const { next, isTurbopack } = nextTestSetup({
    files: __dirname,
  })

  it('only allows a single instance of `next dev` to run at a time', async () => {
    const browser = await next.browser('/')
    expect(await browser.elementByCss('p').text()).toBe('Page')

    const { stderr, exitCode } = await execa(
      'next',
      ['dev', isTurbopack ? '--turbopack' : '--webpack'],
      {
        cwd: next.testDir,
        reject: false,
      }
    )
    expect(stripAnsi(stderr)).toContain('Unable to acquire lock')
    expect(exitCode).toBe(1)
  })
})
