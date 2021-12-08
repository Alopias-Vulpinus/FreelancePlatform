export const GET_METHOD = 'GET'
export const POST_METHOD = 'POST'

export const CUSTOMER_LOGIN_GOOGLE = '/auth/login/customer/google'
export const PERFORMER_LOGIN_GOOGLE = '/auth/login/freelancer/google'

export const GET_PROFILE = '/profile'

export const PERFORMER_ALL = '/freelancer/all'

export const CUSTOMER_ALL = '/customer/all'

export const TASK_NEW = '/task/new'

export const ASSIGN_TASK = '/task/assign'
// taskId, performerId

export const CHANGE_TASK_STATUS = '/task/status'

export const CHANGE_CUSTOMER_RATING = '/profile/customer/rate'

export const CHANGE_PERFORMER_RATING = '/profile/performer/rate'
// userFrom userTo rating

export const TASK_CHOOSE_CANDIDATE = '/task/candidate'
// taskId, candidateId

export const GET_TASK = '/task'
export const GET_TASKS_OF_CUSTOMER_NEW = '/task/customer/all?status=NEW'
export const GET_TASKS_OF_CUSTOMER_WORKING = '/task/customer/all?status=WORKING'
export const GET_ALL_TASKS = '/task/all'
export const GET_ALL_NEW_TASKS = '/task/all?status=NEW'
export const GET_ALL_WORKING_TASKS = '/task/all?status=WORKING'
export const GET_TASKS_OF_PERFORMER = '/task/freelancer/all?status=WORKING'