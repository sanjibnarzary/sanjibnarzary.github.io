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
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "var(--radius-3)",
                        overflow: "hidden",
                        background: "var(--gray-3)",
                      }}
                    >
                      {product.icon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={product.icon}
                          alt={`${product.name} app icon`}
                          style={{
                            width: 112,
                            height: 112,
                            objectFit: "contain",
                            borderRadius: "var(--radius-4)",
                          }}
                        />
                      ) : product.image ? (
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
                  {(product.playStoreUrl || product.apkUrl) && (
                    <Flex gap="2" wrap="wrap">
                      {product.playStoreUrl && (
                        <StoreLink
                          href={product.playStoreUrl}
                          label="Get it on Google Play"
                          external
                        >
                          <PlayStoreIcon />
                          Google Play
                        </StoreLink>
                      )}
                      {product.apkUrl && (
                        <StoreLink
                          href={product.apkUrl}
                          label={`Download ${product.name} APK`}
                          download
                        >
                          <DownloadIcon />
                          Direct APK
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
  download,
  external,
  children,
}: {
  href: string;
  label: string;
  download?: boolean;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      download={download}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
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

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12m0 0l-5-5m5 5l5-5M5 21h14" />
    </svg>
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
      <path d="M3.6 2.3a1.4 1.4 0 0 0-.6 1.2v17a1.4 1.4 0 0 0 .6 1.2L13.3 12 3.6 2.3zm10.4 8.3 2.7-2.7L5.9 1.8l8.1 8.8zm0 2.8-8.1 8.8 10.8-6.1L14 13.4zm3.5-1.4-3 1.7 3 1.7 2.6-1.5a1 1 0 0 0 0-1.8l-2.6-1.5-.0.4z" />
    </svg>
  );
}
