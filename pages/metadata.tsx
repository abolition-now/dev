import React from "react";
import FACETS from "@/.canopy/facets.json";
import Layout from "@/components/layout";
import Container from "../components/Shared/Container";
import Link from "next/link";
import Heading from "@/components/Shared/Heading/Heading";

export default function Metadata() {
  const MetadataItem = ({ value, slug, doc_count, path }) => {
    return (
      <li>
        <Link href={`${path}${slug}`}>{value}</Link> <em>{doc_count}</em>
      </li>
    );
  };

  return (
    <Layout>
      <Container>
        <Heading as="h1">Metadata</Heading>
        {FACETS.map(({ label, slug, values }) => {
          const path = `/search?${slug}=`;

          return (
            <div>
              <Heading as="h2">{label}</Heading>
              <ul>
                {values.map((value) => (
                  <MetadataItem {...value} path={path} />
                ))}
              </ul>
            </div>
          );
        })}
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}