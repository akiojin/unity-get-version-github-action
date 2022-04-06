import * as core from '@actions/core'
import { Unity } from '@akiojin/unity-command'

async function Run()
{
	try {
		const version = await Unity.GetVersion(core.getInput('project-directory') || process.cwd())

		core.setOutput('version', version)
		core.info(`Unity version: ${version}`)
	} catch (ex: any) {
		core.setFailed(ex.message)
	}
}

Run()
