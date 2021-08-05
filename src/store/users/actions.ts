export const createUserAction = (user: any) => {
    return {
        type: 'USER_CREATE',
        payload: user,
    }
}

export const deleteUserAction = (id: any) => {
    return {
        type: 'USER_DELETE',
        payload: id,
    }
}

export const updateUserAction = (user: any) => {
    return {
        type: 'USER_UPDATE',
        payload: user,
    }
}
