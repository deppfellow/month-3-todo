import ifritSign from '@/assets/ifritSign.webp';

function NotFound() {
	return (
		<div className="flex h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200">
			<img
				src={ifritSign}
				alt="NotFoundSign"
				style={{ width: '60vw' }}
				className="inset-0 block"
			/>
		</div>
	);
}

export default NotFound;
