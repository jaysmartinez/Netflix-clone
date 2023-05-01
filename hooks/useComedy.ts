import useSwr from 'swr';
import fetcher from '@/libs/fetcher';

const useComedy = (genre?: string) => {
	const { data, error, isLoading } = useSwr(genre ? `/api/movies/${genre}` : null, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	});
	return {
		data,
		error,
		isLoading,
	};
};

export default useComedy;
