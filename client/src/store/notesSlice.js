import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const gUrl = 'http://localhost:3030';
const gUserIdTemp = '6100488d1646b332bc765f24';

export const fetchData = createAsyncThunk('notes/fetchData', async (filter) => {
  const response = await axios.get(`${gUrl}/users/${gUserIdTemp}`);
  if (!filter) return response.data;
  // there's a filter:
  const { notes } = response.data;
  for (const cat in notes) {
    const notesCat = notes[cat];
    notes[cat] = notesCat.filter((note) =>
      note.labels.find((label) => label._id === filter.label._id)
    );
  }
  return response.data;
});

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async (textSearch) => {
  const response = await axios.get(`${gUrl}/users/${gUserIdTemp}/notes?text=${textSearch}`);
  return response.data;
});

export const createNote = createAsyncThunk('notes/createNote', async (noteData) => {
  await axios.post(`${gUrl}/users/${gUserIdTemp}/notes`, noteData);
  return noteData;
});

export const updateNote = createAsyncThunk('notes/updateNote', async (noteData) => {
  const { _id: noteId } = noteData;

  await axios.patch(`${gUrl}/notes/${noteId}`, noteData);
  return noteData;
});

export const deleteNote = createAsyncThunk('notes/deleteNote', async (id) => {
  await axios.delete(`${gUrl}/notes/${id}`);
  return id;
});

export const createLabel = createAsyncThunk('label/createLabel', async (label) => {
  const response = await axios.post(`${gUrl}/users/${gUserIdTemp}/labels`, label);
  return response.data;
});

export const deleteLabel = createAsyncThunk('label/deleteLabel', async (id) => {
  await axios.delete(`${gUrl}/labels/${id}`);
  return id;
});

export const notesSlice = createSlice({
  name: 'data',
  initialState: { notes: [], selectedNote: null, labels: [], isLoading: false },
  reducers: {
    selectNote: (state, action) => {
      state.selectedNote = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.notes = action.payload.notes;
      state.labels = action.payload.labels;
    });
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state.notes = action.payload;
    });
    builder.addCase(updateNote.fulfilled, (state, action) => {
      const noteData = action.payload;
      state.selectedNote = noteData;
    });
    builder.addCase(createLabel.fulfilled, (state, action) => {
      const label = action.payload;
      state.labels.push(label);
    });
    builder.addCase(deleteLabel.fulfilled, (state, action) => {
      const labelId = action.payload;
      const labelIndex = state.labels.findIndex((label) => label._id === labelId);
      state.labels.splice(labelIndex, 1);
    });
  },
});

// Action creators are generated for each case reducer function
export const { selectNote } = notesSlice.actions;

export default notesSlice.reducer;
