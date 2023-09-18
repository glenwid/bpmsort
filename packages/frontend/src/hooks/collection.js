import useSWR from 'swr'
import axios from '@/lib/axios'

export const useCollection = () => {
    const { data: records, error } = useSWR('/api/collection', () =>
        axios
            .get('/api/collection')
            .then(response => {
                return response.data
            })
            .catch(error => {
                error = Object.values(error.response.data.errors).flat();
            })
    );

    return {
        records,
        isLoading: !error && !records,
        isError: error,
    };
}
