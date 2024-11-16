import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/Axios";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async (token) => {

  try {
    
    const response = await axiosInstance.get('/incidents/incident-ids', {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
});

export const combineData = createAsyncThunk("combineData/fetch", async({incidentId, token}, { rejectWithValue })=>{
  try {
    const response = await axiosInstance.get(`combinedResponse/${incidentId}`,{
      headers:{
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data || error.message);
  }
});

export const basicData = createAsyncThunk("basicData", async({incidentId, token},{rejectWithValue})=>{
  try {
    const response = await axiosInstance.get(`incidents/${incidentId}`,{
      headers:{
        Authorization:`Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
      return rejectWithValue(error.response.data || error.message)
  }
});

export const causesData = createAsyncThunk("causesData", async({incidentId, token},{rejectWithValue})=>{
  try {
    const response = await axiosInstance.get(`reason/incident/${incidentId}`,{
      headers:{
        Authorization:`Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
      return rejectWithValue(error.response.data || error.message)
  }
});

export const witnessData = createAsyncThunk("witnessData", async({incidentId, token},{rejectWithValue})=>{
  try {
    const response = await axiosInstance.get(`witnessAndOther/incident/${incidentId}`,{
      headers:{
        Authorization:`Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
      return rejectWithValue(error.response.data || error.message)
  }
});

export const policeData = createAsyncThunk("policeData", async({incidentId, token},{rejectWithValue})=>{
  try {
    const response = await axiosInstance.get(`police-remarks/incident/${incidentId}`,{
      headers:{
        Authorization:`Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
      return rejectWithValue(error.response.data || error.message)
  }
});

export const insuranceData = createAsyncThunk("insuranceData", async({incidentId, token},{rejectWithValue})=>{
  try {
    const response = await axiosInstance.get(`insurance/incident/${incidentId}`,{
      headers:{
        Authorization:`Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
      return rejectWithValue(error.response.data || error.message)
  }
});

export const inspectionData = createAsyncThunk("inspectionData", async({incidentId, token},{rejectWithValue})=>{
  try {
    const response = await axiosInstance.get(`inspectionReport/incident/${incidentId}`,{
      headers:{
        Authorization:`Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
      return rejectWithValue(error.response.data || error.message)
  }
});

export const furtherData = createAsyncThunk("furtherData", async({incidentId, token},{rejectWithValue})=>{
  try {
    const response = await axiosInstance.get(`furtherRemarks/incident/${incidentId}`,{
      headers:{
        Authorization:`Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
      return rejectWithValue(error.response.data || error.message)
  }
});

