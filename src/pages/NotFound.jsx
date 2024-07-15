import ifritSign from '@/assets/ifritSign.webp';

function NotFound() {
	return (
		<div className="to-slate-150 relative flex h-screen bg-gradient-to-br from-slate-50">
			<img
				src={ifritSign}
				alt="NotFoundSign"
				// style={{ width: '60vw' }}
				className="fixed left-1/4 top-1/4 z-0 w-[50vw] translate-x-[-80px] translate-y-[-20px]"
			/>
			<div className="z-50 flex h-full w-full items-center justify-center">
				<h1 className="text-4xl font-bold">404 - Not Found</h1>
			</div>
		</div>
	);
}

export default NotFound;
