import React from 'react';
import Result from '../../components/common/Result';
import { useSelector } from 'react-redux';
import PeticionAllTournaments from '../../components/common/PeticionAllTournaments';
import PeticionStatsTournament from '../../components/common/PeticionStatsTournament';
import { useEffect } from 'react';

const ResultadosTorneos = () => {
	const statsTournament = useSelector((state) => state.statsTournament.statsTournament);
	const allTournaments = useSelector((state) => state.allTournaments.allTournaments);
	const torneosToShow = allTournaments.slice(-15).reverse();

			PeticionStatsTournament(84);
	
	// Datos de los torneos
	PeticionAllTournaments();//hace una nueva peticion para actulizar datos
	
	useEffect(() => {
		
		
	   window.scrollTo({
		   top:0,
		   behavior:'smooth'
		 })
	   }, [])

	return (
		<div className='bg-primary h-auto w-full px-[30px] flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-center gap-x-14'>
			<div className='w-full lg:w-full'>
				<h1 className='text-3xl font-roboto text-white text-center py-2'>
					Resultados Torneos
				</h1>
			</div>
			
			{/* Mostrar los resultados de cada torneo */}
			{torneosToShow.map((tournament, index ) => (
				<Result key={index} {...tournament}  />
			))}
		</div>
	);
};

export default ResultadosTorneos;
