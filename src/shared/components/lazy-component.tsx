import { lazy, Suspense } from "react";

interface LazyComponentProps {
	path: string;
	name: string;
	[key: string]: unknown;
}

const ComponentName = (path: string, name: string) => {
	return lazy(() => import(`../../${path}`).then((module) => ({ default: module[name] })));
};

export const LazyComponent = ({ path, name, ...props }: LazyComponentProps) => {
	const Component = ComponentName(path, name);

	return (
		<Suspense fallback={<h2>Loading...</h2>}>
			<Component {...props} />
		</Suspense>
	);
};
