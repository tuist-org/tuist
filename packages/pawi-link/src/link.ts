import { Update } from 'pawi'
import { updateAll } from './childLoader'
import { loadBranch } from './loadBranch'

export async function link<T>(
  projectPath: string,
  rootCtx: Partial<T> = {}
): Promise<Update> {
  const { updates } = await loadBranch(projectPath, rootCtx)
  return updateAll(updates)
}

export async function run<T>(
  projectPath: string,
  rootCtx: Partial<T> = {}
): Promise<void> {
  return (await link(projectPath, rootCtx))()
}
