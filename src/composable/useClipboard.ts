import type { Ref } from "vue";

export function useClipboard() {
  const copyText = (text: string, copy: Ref<boolean, boolean>) => {
    try {
      copy.value = true
      navigator.clipboard.writeText(text);
      setTimeout(() => { copy.value = false; }, 1000);
    } catch (err) {
      console.error('Unable to copy text', err);
    }
  };

  return { copyText };
}

