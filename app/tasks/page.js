import prisma from '../lib/db'
import { addTask } from '@/actions/actions'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

export default async function PostsPage() {
  const tasks = await prisma.task.findMany()
  const tasksCount = tasks.length || 0
  // Don't keep the authentication check in layout page as it is shared between
  // the pages. If user trying to access the /tasks page directly, it renders the
  // requested server component not running the authentication check inside the
  // layout
  const { isAuthenticated } = getKindeServerSession()
  const authenticated = await isAuthenticated()
  if (!authenticated) redirect('/api/auth/login')

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">{`All Tasks (${tasksCount})`}</h1>
      <ul>
        {tasks.map((task) => (
          <div key={task.id} className="text-white">
            {task.title}
          </div>
        ))}
      </ul>
      <form action={addTask} className="space-x-2 h-4">
        <input
          type="text"
          name="title"
          className="px-3 py-1 rounded text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 px-3 py-1 text-white rounded"
        >
          Add task
        </button>
      </form>
    </main>
  )
}
