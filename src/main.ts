import * as core from '@actions/core'
import { Unity } from '@akiojin/unity-command'

async function Run()
{
	try {
		core.setOutput('version', Unity.GetVersion(core.getInput('project-directory')))
	} catch (ex: any) {
		core.setFailed(ex.message)
	}
}

Run()
