'use server'

import prisma from '@/app/lib/db'
import { revalidatePath } from 'next/cache'

export async function addTask(formData) {
  await prisma.task.create({
    data: {
      title: formData.get('title'),
    },
  })

  // After creating an entry in the database revalidate the path to reload the data from the DB on the tasks page
  revalidatePath('/tasks')
}
