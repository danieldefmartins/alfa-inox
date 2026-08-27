'use client'
import { useState } from 'react'
import { SITE, waLink } from '@/lib/site'
import { SERVICOS } from '@/lib/servicos'
import { AREAS } from '@/lib/areas'
import { WhatsAppIcon, Mail } from './Icons'

export default function OrcamentoForm() {
  const [f, setF] = useState({
    nome: '', telefone: '', cidade: '', servico: '', ambiente: '', medida: '', prazo: '', detalhes: '',
  })

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF({ ...f, [k]: e.target.value })

  const mensagem = [
    'Olá! Gostaria de um orçamento pela Alfa Inox.',
    '',
    `Nome: ${f.nome || '—'}`,
    `Telefone: ${f.telefone || '—'}`,
    `Cidade/bairro: ${f.cidade || '—'}`,
    `Serviço: ${f.servico || '—'}`,
    `Ambiente: ${f.ambiente || '—'}`,
    `Medida aproximada: ${f.medida || '—'}`,
    `Prazo desejado: ${f.prazo || '—'}`,
    '',
    `Detalhes: ${f.detalhes || '—'}`,
  ].join('\n')

  const valido = f.nome.trim().length > 1 && f.servico !== ''

  const assunto = `Orçamento — ${f.servico || 'Aço inox'} — ${f.nome || 'Site'}`
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(mensagem)}`

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0 18px' }}>
        <div className="field">
          <label htmlFor="nome">Seu nome *</label>
          <input id="nome" value={f.nome} onChange={set('nome')} placeholder="Como podemos te chamar" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="telefone">Telefone / WhatsApp</label>
          <input id="telefone" value={f.telefone} onChange={set('telefone')} placeholder="(31) 9 0000-0000" inputMode="tel" autoComplete="tel" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0 18px' }}>
        <div className="field">
          <label htmlFor="servico">O que você precisa? *</label>
          <select id="servico" value={f.servico} onChange={set('servico')} required>
            <option value="">Selecione…</option>
            {SERVICOS.map((s) => <option key={s.slug} value={s.nome}>{s.nome}</option>)}
            <option value="Outro serviço em inox">Outro serviço em inox</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="cidade">Cidade e bairro</label>
          <input id="cidade" list="cidades" value={f.cidade} onChange={set('cidade')} placeholder="Ex.: Belo Horizonte — Buritis" />
          <datalist id="cidades">{AREAS.map((a) => <option key={a.slug} value={a.nome} />)}</datalist>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0 18px' }}>
        <div className="field">
          <label htmlFor="ambiente">Ambiente</label>
          <select id="ambiente" value={f.ambiente} onChange={set('ambiente')}>
            <option value="">Selecione…</option>
            <option>Residencial — interno</option>
            <option>Residencial — externo</option>
            <option>Condomínio / área comum</option>
            <option>Comercial / empresa</option>
            <option>Obra nova / construtora</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="medida">Medida aproximada</label>
          <input id="medida" value={f.medida} onChange={set('medida')} placeholder="Ex.: 6 metros lineares" />
        </div>
        <div className="field">
          <label htmlFor="prazo">Prazo desejado</label>
          <select id="prazo" value={f.prazo} onChange={set('prazo')}>
            <option value="">Selecione…</option>
            <option>O quanto antes</option>
            <option>Nas próximas 2 semanas</option>
            <option>Neste mês</option>
            <option>Ainda pesquisando</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="detalhes">Detalhes do projeto</label>
        <textarea id="detalhes" rows={4} value={f.detalhes} onChange={set('detalhes')}
          placeholder="Conte um pouco: quantos lances de escada, se tem curva ou patamar, se há crianças na casa, se prefere travessa horizontal, prumo vertical ou vidro…" />
      </div>

      <p style={{ fontSize: '.87rem', color: 'var(--steel)', marginBottom: 20 }}>
        Ao enviar pelo WhatsApp, aproveite para <strong>anexar fotos do lance</strong> — de frente e
        de lado. É o que permite dar uma estimativa realista já no primeiro contato.
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <a
          className="btn btn-wa btn-lg"
          href={valido ? waLink(mensagem) : undefined}
          target="_blank"
          rel="noopener"
          aria-disabled={!valido}
          style={{ opacity: valido ? 1 : .5, pointerEvents: valido ? 'auto' : 'none' }}
        >
          <WhatsAppIcon size={20} /> Enviar pelo WhatsApp
        </a>
        <a className="btn btn-ghost btn-lg" href={valido ? mailto : undefined}
          aria-disabled={!valido} style={{ opacity: valido ? 1 : .5, pointerEvents: valido ? 'auto' : 'none' }}>
          <Mail size={18} /> Enviar por e-mail
        </a>
      </div>
      {!valido && (
        <p style={{ fontSize: '.85rem', color: 'var(--steel)', marginTop: 12 }}>
          Preencha ao menos o nome e o serviço para liberar o envio.
        </p>
      )}
    </form>
  )
}
