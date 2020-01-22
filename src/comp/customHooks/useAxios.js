import {useState, useEffect} from 'react';

export const useAxios = (url) => {
useEffect(() =>{
    setState(state => ({state: state.dataRight, loadingRight: true, error: null}));

    const getAxios = async () => {
        try{
            const resp = await axios(url);
            const data = await resp.data;

        } catch (err) {
            setState({errorRight: err.toString()})
        }
    }
    getAxios();

}, [url, setState]);
    return [url, setState];
}