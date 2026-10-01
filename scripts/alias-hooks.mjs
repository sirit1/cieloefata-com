export async function resolve(specifier, context, next) {
  if (specifier.startsWith("@/")) {
    const rel = specifier.slice(2).replace(/\.ts$/, "") + ".ts";
    const url = new URL(`../src/${rel}`, import.meta.url);
    return next(url.href, context);
  }
  return next(specifier, context);
}
