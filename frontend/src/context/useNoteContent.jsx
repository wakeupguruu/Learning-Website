import { Children, createContext, useState } from 'react';

export const NoteContext = createContext();

export const NoteContextProvider = ({children}) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const updateSelectedDate = (date) => {
      setSelectedDate(date);
    };

    const [NoteEdit, setNoteEdit] = useState(true);

    const updateNoteEdit = () => {
      setNoteEdit(!NoteEdit);
    };
   
    return (
      <NoteContext.Provider value={{ selectedDate, updateSelectedDate , NoteEdit, updateNoteEdit}}>
        {children}
      </NoteContext.Provider>
    );
}
