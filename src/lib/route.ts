import { useSyncExternalStore } from 'react'
import type { Lang } from '../data/types'
import type { Mode } from '../context/mode-context'

/*
 * Idioma e modo vivem na query string, para poder compartilhar links:
 *
 *   (sem parâmetros)     -> en + recruiter (padrão)
 *   ?lg=pt               -> pt + recruiter
 *   ?mode=dev            -> en + dev
 *   ?lg=pt&mode=dev      -> pt + dev
 *
 * Valores padrão não aparecem na URL. Outros parâmetros e a âncora (#secao)
 * são preservados ao trocar de idioma/modo.
 */

export interface RouteState {
  lang: Lang
  mode: Mode
}

export function parseRoute(search: string): RouteState {
  const params = new URLSearchParams(search)
  return {
    lang: params.get('lg') === 'pt' ? 'pt' : 'en',
    mode: params.get('mode') === 'dev' ? 'dev' : 'recruiter',
  }
}

/** Monta a URL (caminho + query + âncora) para um estado, a partir da URL atual. */
export function buildHref({ lang, mode }: RouteState): string {
  const params = new URLSearchParams(window.location.search)
  if (lang === 'pt') params.set('lg', 'pt')
  else params.delete('lg')
  if (mode === 'dev') params.set('mode', 'dev')
  else params.delete('mode')
  const query = params.toString()
  return `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`
}

/* --------------------------- store sobre a URL --------------------------- */

const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  window.addEventListener('popstate', listener)
  return () => {
    listeners.delete(listener)
    window.removeEventListener('popstate', listener)
  }
}

const getSearch = () => window.location.search

/** Troca idioma/modo sem recarregar a página (o botão voltar desfaz a troca). */
export function navigate(next: RouteState) {
  const href = buildHref(next)
  const current = `${window.location.pathname}${window.location.search}${window.location.hash}`
  if (href === current) return
  window.history.pushState(null, '', href)
  listeners.forEach((listener) => listener())
}

/** Estado atual (idioma + modo), reativo a trocas e ao botão voltar/avançar. */
export function useRoute(): RouteState {
  const search = useSyncExternalStore(subscribe, getSearch)
  return parseRoute(search)
}
