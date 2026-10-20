import NextLink from "next/link";
import {
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";
import { Footer } from "@components/footer";
import { PrimitivesHeader } from "@components/primitives-header";
import { PrimitivesMobileMenu } from "@components/primitives-mobile-menu";
import { baseMetadata } from "@utils/metadata";
import { getProductConfig, getProductSlugs } from "@utils/products";
import type { Metadata, Route } from "next";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Products",
  description: "All available apps.",
};

export default function ProductsIndex() {
  const products = getProductSlugs().map((slug) => ({
    slug,
    ...getProductConfig(slug),
  }));

  return (
    <>
      <PrimitivesMobileMenu />
      <PrimitivesHeader />
      <Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
        <Section size={{ initial: "2", md: "4" }}>
          <Heading as="h1" size="8" mb="6">
            Products
          </Heading>
          <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap="5" mb="9">
            {products.map((product) => (
              <Card key={product.slug} size="3">
                <Flex
                  direction="column"
                  height="100%"
                  justify="between"
                  gap="4"
                >
                  <NextLink
                    href={`/products/${product.slug}` as Route}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <Box
                      mb="4"
                      style={{
                        aspectRatio: "16 / 9",
                        borderRadius: "var(--radius-3)",
                        overflow: "hidden",
                        background: "var(--gray-3)",
                      }}
                    >
                      {product.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <Flex align="center" justify="center" height="100%">
                          <Text size="9" weight="bold" color="gray">
                            {product.name.charAt(0)}
                          </Text>
                        </Flex>
                      )}
                    </Box>
                    <Heading as="h2" size="4" mb="1">
                      {product.name}
                    </Heading>
                    <Text as="p" size="2" color="gray" mb="3">
                      {product.description}
                    </Text>
                    <Text size="2" color="blue" weight="medium">
                      View product →
                    </Text>
                  </NextLink>
                  {(product.playStoreUrl || product.appStoreUrl) && (
                    <Flex gap="2" wrap="wrap">
                      {product.playStoreUrl && (
                        <StoreLink
                          href={product.playStoreUrl}
                          label="Get it on Google Play"
                        >
                          <PlayStoreIcon />
                          Google Play
                        </StoreLink>
                      )}
                      {product.appStoreUrl && (
                        <StoreLink
                          href={product.appStoreUrl}
                          label="Download on the App Store"
                        >
                          <AppStoreIcon />
                          App Store
                        </StoreLink>
                      )}
                    </Flex>
                  )}
                </Flex>
              </Card>
            ))}
          </Grid>
          <Box mt="9" pt="9">
            <Footer />
          </Box>
        </Section>
      </Container>
    </>
  );
}

function StoreLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 12px",
        borderRadius: "var(--radius-3)",
        background: "var(--gray-12)",
        color: "var(--gray-1)",
        fontSize: "var(--font-size-2)",
        fontWeight: 500,
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}

function PlayStoreIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3.6 1.8c-.3.3-.5.8-.5 1.4v17.6c0 .6.2 1.1.5 1.4l9.9-10.2L3.6 1.8zm10.6 9.2 2.9-2.9L5.4 1.6c-.4-.2-.8-.2-1.1 0L14.2 11zm0 2L4.3 22.4c.3.2.7.2 1.1 0l11.7-6.5-2.9-2.9zm3.9-3.1-3.2 3.1 3.2 3.2 3.6-2c1-.6 1-1.6 0-2.2l-3.6-2.1z" />
    </svg>
  );
}

function AppStoreIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.4 12.6c0-2.4 2-3.5 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.400 1.200 9.800.8 1.200 1.800 2.500 3 2.400 1.200 0 1.700-.8 3.100-.8s1.900.8 3.200.7c1.300 0 2.200-1.200 3-2.400.9-1.400 1.300-2.700 1.300-2.800-.1 0-2.500-1-2.500-3.900zM14 5.400c.7-.8 1.100-1.900 1-3-.9 0-2.100.6-2.800 1.400-.6.700-1.100 1.800-1 2.900 1.100.1 2.100-.5 2.800-1.300z" />
    </svg>
  );
}
