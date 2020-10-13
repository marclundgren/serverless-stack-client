import { Storage } from "aws-amplify";

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;

  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });

  return stored.key;
}

export function s3Remove(file) {
  const filename = `${Date.now()}-${file.name}`;

  return Storage.vault.remove(filename, file, {
    contentType: file.type,
  });
}
