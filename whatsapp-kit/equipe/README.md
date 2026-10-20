# Perfil de WhatsApp da equipe — padrão Alfa Inox

O número **oficial** da empresa é **(31) 2298-0072** (logo da Alfa, conectado ao 360).
Cada pessoa da equipe usa o **próprio rosto** com o selo do "A" no canto.

## Foto (padrão premium)
1. Foto de rosto, sorrindo, camiseta escura ou polo da Alfa (qualquer fundo — ele é removido).
2. `swift cutout.swift FOTO.png recorte.png` (remove o fundo, usa o recurso do macOS)
3. `python3 compose.py recorte.png ../../public/brand/mark-512.png 60 nome-perfil.png`
   → fundo grafite com luz azul-petróleo da marca, anel fino na cor da Alfa e selo do "A" às 4h30.
4. Confira `previa.png` (recorte redondo) e use `nome-perfil.png` (1080×1080) no WhatsApp.

## Textos (WhatsApp Business → Configurações → Ferramentas comerciais → Perfil)
- **Nome:** `Daniel · Alfa Inox` (`Nome · Alfa Inox`)
- **Categoria:** a mesma da empresa
- **Descrição:**
  `Consultor da Alfa Inox — corrimão e guarda-corpo em aço inox sob medida em BH e região, desde 2010. Canal oficial da empresa: (31) 2298-0072.`
- **Recado (Sobre):** `Alfa Inox · corrimão e guarda-corpo em inox em BH`
- **Endereço:** R. Cantagalo, 1449 - Aparecida, Belo Horizonte - MG, 31230-770
- **Horário:** seg–sex 9h–21h, sáb 9h–14h
- **E-mail:** vendas@alfainoxbh.com.br · **Site:** https://alfainoxbh.com.br
- **Saudação/ausência:** os mesmos textos de `../mensagens.md`, assinados com o nome da pessoa.
