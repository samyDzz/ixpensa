import create from 'zustand'

export const useDailyDetail = create((set, get) => ({
  show: false,
  toggleShowDailyDetail: () => {
    set(() => ({ show: !get().show }))
  }
}))
