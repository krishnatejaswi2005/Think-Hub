import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard, { startupCardType } from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/lib/query";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
	const query = (await searchParams).query;
	const params = { search: query || null };

	const session = await auth();

	const response = await sanityFetch({ query: STARTUPS_QUERY, params });
	const { data: posts } = response;

	return (
		<>
			<section className="pink_container">
				<h1 className="heading">
					Pitch your startup, <br />
					Connect with entrepreneurs
				</h1>
				<p className="sub-heading !max-w-3xl">
					Submit ideas, vote on pitches, and get noticed in virtual
					competitions.
				</p>
				<SearchForm query={query} />
			</section>
			<section className="section_container">
				<p className="text-30-semibold">
					{query ? `Search results for "${query}"` : `All startups`}
				</p>
				<ul className="mt-7 card_grid">
					{posts?.length > 0 ? (
						posts.map((post: startupCardType) => (
							<StartupCard key={post?._id} post={post} />
						))
					) : (
						<p className="no-result">No Startups Found</p>
					)}
				</ul>
			</section>
			<SanityLive />
		</>
	);
}
