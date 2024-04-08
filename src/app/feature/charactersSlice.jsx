import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async ({ page = 1, query = '' }) => {
    try {

        const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${encodeURIComponent(query)}`;
        const response = await fetch(url);
        const charactersData = await response.json();
        return charactersData;
    } catch (error) {
        throw error;
    }
});


export const fetchSingleCharacter = createAsyncThunk("characters/fetchSingleCharacterData",
    async (charId) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${charId}`);
            const characterData = await response.json();
            return characterData;
        } catch (error) {
            throw error;
        }
    }
);

const initialState = {
    character: {},
    status: '',
    pagination: {
        count: 0,
        pages: 0,
        prev: "",
        next: "",
    },
    error: '',
    singleCharacter: [],
    selectCharacterLoading: false,
    currentQuery: ''

} 

const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        
            .addCase(fetchCharacters.pending, (state) => {
                state.status = "loading"
            })
            
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.character = action.payload
                state.pagination = {
                    count: action.payload.info?.count,
                    pages: action.payload.info?.pages,
                    prev: action.payload.info?.prev,
                    next: action.payload.info?.next,
                };
                
                state.currentQuery = action.meta.arg.query

            })

            .addCase(fetchSingleCharacter.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.singleCharacter = action.payload
                ;})


            .addCase(fetchCharacters.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })


            

    },
    
});


export const selectData = (state) => state?.characters?.character?.results;
export const selectDataStatus = (state) => state?.characters?.status;
export const selectPagination = (state) => state?.characters?.pagination;
export const selectSingleCharacter = (state) => state?.characters?.singleCharacter;
export const selectCurrentQuery = (state) => state?.characters?.currentQuery
export default characterSlice.reducer;
