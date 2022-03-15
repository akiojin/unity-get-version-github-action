import * as core from '@actions/core'
import { promises as fs } from 'fs'

async function Run()
{
	try {
		const data = await fs.readFile(`${core.getInput('project-directory')}/ProjectSettings/ProjectVersion.txt`)
		const text = data.toString()

		const result = text.match(new RegExp('^m_EditorVersion: (.*)$'))

		if (result == null) {
			throw new Error('Invalid ProjectVersion.txt')
		}

		core.setOutput('version', result[1])
	} catch (ex: any) {
		core.setFailed(ex.message)
	}
}

Run()
