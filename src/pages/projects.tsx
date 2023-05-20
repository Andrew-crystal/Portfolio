// import { fetchProjects } from '~/lib/projects';
import { Layout } from '~/layouts';
import { Animate, List } from '~/components';
import { ListActionType } from '~/types';

import type { GetStaticProps } from 'next';

import type { ListAction, Project } from '~/types';

interface ProjectProps {
	stringifiedProjects: string;
}

export const getStaticProps: GetStaticProps<ProjectProps> = () => {
	const projects = [
		{
			description:
				'  This project aims to recognize the emotion from the Video. Trained on RAVDESS database.',
			icon: '🤝',
			homepage: 'https://github.com/Athena-angel/Emotion-Recognition-From-Video',
			name: 'Emotion Recognition From Video.',
			post: undefined,
			template: false,
			url: '',
		},
		{
			description:
				'  The easiest way to detect and prevent plant disease from Photo of plant leafs.',
			icon: '🌿',
			homepage: 'https://github.com/Athena-angel/Plant-Disease-Detection',
			name: 'Plant Disease Detection',
			post: undefined,
			template: false,
			url: '',
		},
		{
			description: '  This project makes it easy to change ur hair color. Just Enjoy~',
			icon: '👨🏻‍🦱',
			homepage: 'https://github.com/Athena-angel/HairColorChange',
			name: 'Hair Color Changer',
			post: undefined,
			template: false,
			url: '',
		},
		{
			description: '  Personal portfolio that you see now!😉 ',
			icon: '💖',
			homepage: 'https://portfolio-angeli.web.app/',
			name: 'Andrew Mark Portfolio',
			post: undefined,
			template: false,
			url: '',
		},
	];

	return {
		props: {
			stringifiedProjects: JSON.stringify(projects),
		},
		revalidate: 3600,
	};
};

export default function ProjectsPage({ stringifiedProjects }: ProjectProps): JSX.Element {
	const projects = JSON.parse(stringifiedProjects) as Array<Project>;

	return (
		<Layout.Default seo={{ title: 'andrew ─ projects' }}>
			<div className="my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8">
				<div className="relative max-w-xl mx-auto">
					<List.Container>
						{projects.map((project, index) => (
							<Animate
								animation={{ y: [50, 0], opacity: [0, 1] }}
								key={index}
								transition={{
									delay: 0.1 * index,
								}}>
								<List.Item
									actions={[
										...(project.post
											? [
													{
														type: ListActionType.LINK,
														external: false,
														href: project.post,
														icon: 'feather:edit-3',
														label: `Blog post about ${project.name}`,
													} as ListAction,
											  ]
											: []),
										...(project.homepage
											? [
													{
														type: ListActionType.LINK,
														href: project.homepage,
														icon: 'feather:home',
														label: `${project.name} homepage`,
													} as ListAction,
											  ]
											: []),
										// {
										// 	type: ListActionType.LINK,
										// 	href: project.url,
										// 	icon: 'feather:github',
										// 	label: 'GitHub Repository',
										// },
									]}
									description={project.description}
									icon={<span className="text-xl">{project.icon}</span>}
									title={project.name}
								/>
							</Animate>
						))}
					</List.Container>
				</div>
			</div>
		</Layout.Default>
	);
}
