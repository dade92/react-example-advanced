export const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: 'hello world',
}

export const reducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const newPeople = [...state.people, action.payload]
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'item added'
        }
    }
    if (action.type === 'NO_VALUE') {
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'No value added'
        }
    }
    if (action.type === 'CLOSE_MODAL') {
        return {
            ...state,
            isModalOpen: false,
        }
    }
    if (action.type === 'REMOVE_ITEM') {
        const newPeople = state.people.filter((p) => p.id !== action.payload)
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'Item removed'
        }
    }
}
