import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
    compiler: {
        emotion: {
            sourceMap: true,
            autoLabel: "dev-only",
            labelFormat: "[local]",
        },
    },
};

export default bundleAnalyzer(nextConfig);
