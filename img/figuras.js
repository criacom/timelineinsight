/* =====================================================================
   FIGURAS DO MICROJOGO VOL. 14 · INSIGHT: O SÚBITO TEM HISTÓRIA
   ---------------------------------------------------------------------
   Como incluir uma figura:
   1. Salve a imagem nesta pasta (img/) com o nome NN-k.jpg, em minúsculas,
      onde NN é o número do estudo na revisão e k a ordem da figura.
      Ex.: 17-1.jpg, 17-2.jpg. Formatos: .jpg, .png ou .webp; até 1600 px
      de largura (cerca de 300 KB por imagem).
   2. Descomente (tire as duas barras //) a linha modelo do estudo abaixo
      e preencha:
        arquivo  nome do arquivo nesta pasta (obrigatório)
        figura   número da figura no artigo, ex.: "Figura 2"
        legenda  o que a imagem mostra, em uma ou duas frases
        licenca  licença ou autorização; se ficar vazio, vale a indicada
                 no comentário do estudo
        credito  opcional; se vazio, o site usa "Autor (ano), Figura N"
   3. Um estudo pode ter várias figuras: repita a linha, separando com vírgula.
   Se o arquivo listado não existir, o site mostra o esquema da tarefa.

   Chave geral: com FIGURAS_OCULTAR_FECHADAS = true, o site deixa de
   mostrar todas as figuras cuja licença começa com "©" (periódicos
   fechados) e usa o esquema da tarefa no lugar delas.
   ===================================================================== */
window.FIGURAS_OCULTAR_FECHADAS = false;
window.FIGURAS = {
  // 01 · Epstein & Medalie (1983) · Behaviour Analysis Letters
  //    licença provável: Behaviour Analysis Letters (periódico extinto); conferir direitos
  1: [
    { arquivo: "01-1.jpg", figura: "Figura 1", legenda: "Planta da câmara cilíndrica com o trajeto do pombo 282WP no teste. A linha vertical marca a parede de Plexiglas; a placa metálica fica à esquerda, o comedouro à direita. Por volta de 2 min, o pombo empurrou a caixa contra a placa e bicou.", licenca: "© Behaviour Analysis Letters" },
  ],
  // 02 · Epstein et al. (1984) · Nature
  //    licença provável: © Nature; usar com permissão ou como reuso autorizado
  //    figuras citadas na auditoria: Figura 1
  2: [
    { arquivo: "02-1.jpg", figura: "Fig. 1", legenda: "Trajetórias dos pombos nos testes: (a) aves treinadas só a subir e bicar, (b) aves treinadas também a empurrar a caixa até um alvo, (c) controles. Os números indicam o tempo em minutos e segundos.", licenca: "© Nature" },
  ],
  // 03 · Epstein (1985) · The Psychological Record
  //    licença provável: © Springer; usar com permissão ou como reuso do autor
  3: [
    { arquivo: "03-1.jpg", figura: "Figura 1", legenda: "Quadros do videoteipe do teste, a intervalos de 2 s (de 2 s a 60 s). O pombo empurra a caixa até ficar sob a banana, sobe e bica.", licenca: "© Springer" },
    { arquivo: "03-2.jpg", figura: "Figura 2", legenda: "Os 10 s finais do teste, em quadros de 0,5 s: o pombo sobe na caixa e bica a banana.", licenca: "© Springer" },
  ],
  // 04 · Epstein (1987) · Journal of Comparative Psychology
  //    licença provável: © APA; usar com permissão
  //    figuras citadas na auditoria: Figura 1
  4: [
    { arquivo: "04-1.jpg", figura: "Figura 1", legenda: "Quadros do videoteipe a cada 10 s. O pombo abre a porta do compartimento, retira a caixa, empurra-a até a banana, sobe e bica.", licenca: "© APA" },
    { arquivo: "04-2.jpg", figura: "Figura 2", legenda: "Planta da câmara com o trajeto da caixa durante o teste do pombo 289WP; os tempos estão em minutos e segundos.", licenca: "© APA" },
  ],
  // 05 · Luciano (1991) · Psicothema
  //    licença provável: Periódico de acesso aberto; conferir a licença no PDF
  5: [
    { arquivo: "05-1.jpg", figura: "Figura 1", legenda: "Sequência de treino e de testes para cada pombo nos Experimentos 1 (P11) e 2 (P22 a P55). Os ícones representam empurrar com e sem direção, extinção, subir na caixa e bicar a banana.", licenca: "Acesso aberto · Psicothema" },
  ],
  // 06 · Nakajima & Sato (1993) · Journal of the Experimental Analysis of Behavior
  //    licença provável: © Wiley/SEAB; conferir se o artigo é de acesso aberto
  6: [
    { arquivo: "06-1.jpg", figura: "Fig. 1", legenda: "A câmara experimental em quatro vistas (parede do fundo, planta, frente e lateral). Escala: 20 cm.", licenca: "© Wiley/SEAB" },
    { arquivo: "06-2.jpg", figura: "Fig. 5", legenda: "Quadros do videoteipe do pombo G33 no primeiro teste após o treino com o bloco preto.", licenca: "© Wiley/SEAB" },
  ],
  // 07 · Delage (2006) · Repositório Institucional UFPA
  //    licença provável: Repositório UFPA; conferir termo de autorização
  //    figuras citadas na auditoria: Figura 38
  7: [
    { arquivo: "07-1.jpg", figura: "Figura 4", legenda: "Vista lateral da Câmara de Insight: a corrente presa à barra móvel, suspensa sobre a caixa de papelão.", licenca: "Repositório UFPA" },
    { arquivo: "07-2.jpg", figura: "Figura 3", legenda: "Vista frontal da Câmara de Insight, com bebedouros, porta, teto aberto e bandeja de dejetos identificados.", licenca: "Repositório UFPA" },
    { arquivo: "07-3.jpg", figura: "Figura 50", legenda: "Resolução do problema pelo sujeito H6A no teste do grupo GF2: aproxima-se da caixa, sobe e puxa a corrente.", licenca: "Repositório UFPA" },
  ],
  // 08 · Tobias (2006) · Repositório Institucional UFPA
  //    licença provável: Repositório UFPA; conferir termo de autorização
  8: [
    { arquivo: "08-1.jpg", figura: "Figura 2", legenda: "Vista frontal da Câmara de Insight, com o teto perfurado, a porta e os dois bebedouros.", licenca: "Repositório UFPA" },
    { arquivo: "08-2.jpg", figura: "Figura 7", legenda: "Caixas A e B e o cubo de acrílico usados no treino e no teste.", licenca: "Repositório UFPA" },
    { arquivo: "08-3.jpg", figura: "Figura 49 (quadro)", legenda: "Quadro do Teste de Insight 2: o sujeito S1 sobe no cubo e puxa a corrente.", licenca: "Repositório UFPA" },
  ],
  // 09 · Ferreira (2008) · Repositório PUC-SP
  //    licença provável: Repositório PUC-SP; conferir termo de autorização
  9: [
    { arquivo: "09-1.jpg", figura: "Figura 3", legenda: "A câmara circular de acrílico dentro da caixa de isopor que a isolava.", licenca: "Repositório PUC-SP" },
    { arquivo: "09-2.jpg", figura: "Figura 6", legenda: "Triângulos suspensos e a peça que os prendia à tampa da câmara.", licenca: "Repositório PUC-SP" },
    { arquivo: "09-3.jpg", figura: "Figura 12 (quadro)", legenda: "Quadro da sequência do sujeito J1 antes da primeira solução (26 min 10 s): o rato ergue-se em direção ao triângulo.", licenca: "Repositório PUC-SP" },
  ],
  // 10 · Sturz et al. (2009) · Cyberpsychology & Behavior
  //    licença provável: © Mary Ann Liebert; usar com permissão
  //    figuras citadas na auditoria: Figuras 1 e 2
  10: [
    { arquivo: "10-1.jpg", figura: "Fig. 1", legenda: "Vista geral da Test Room, o ambiente virtual em 3D usado na tarefa.", licenca: "© Mary Ann Liebert" },
  ],
  // 11 · Delage & Galvão (2010) · Psicologia: Teoria e Pesquisa
  //    licença provável: Periódico de acesso aberto; conferir a licença no PDF
  11: [
    { arquivo: "11-1.jpg", figura: "Figura 1", legenda: "O cuieiro: matriz de 3 × 3 cuias giratórias com pelotas de cereal, que o sujeito alcançava com a vareta.", licenca: "Acesso aberto · Psicologia: Teoria e Pesquisa" },
    { arquivo: "11-2.jpg", figura: "Figura 2", legenda: "Sequência de fotos do segundo teste de encaixe de varetas, até a resolução do problema.", licenca: "Acesso aberto · Psicologia: Teoria e Pesquisa" },
  ],
  // 12 · Taylor et al. (2010) · Proceedings of the Royal Society B
  //    licença provável: © Royal Society; usar com permissão
  //    figuras citadas na auditoria: Figura 2
  12: [
    { arquivo: "12-1.jpg", figura: "Figure 1", legenda: "O problema de metaferramenta em três etapas: puxar o barbante, retirar a vareta curta, usá-la para extrair a vareta longa da caixa e, com esta, tirar a carne do orifício.", licenca: "© Royal Society" },
  ],
  // 13 · Delage (2011) · Repositório Institucional UFPA
  //    licença provável: Repositório UFPA; conferir termo de autorização
  13: [
    { arquivo: "13-1.jpg", figura: "Figura 1", legenda: "A gaiola-viveiro usada como ambiente experimental.", licenca: "Repositório UFPA" },
    { arquivo: "13-2.jpg", figura: "Figura 5", legenda: "Blocos encaixáveis usados na torre: (A) 2 pinos, (B) 4 pinos, (C) 6 pinos, (D) 1 pino. As fotos mostram amostras de cada modelo.", licenca: "Repositório UFPA" },
    { arquivo: "13-3.jpg", figura: "Figura 4", legenda: "Varetas do Par em T, de bambu, com as medidas de cada peça.", licenca: "Repositório UFPA" },
  ],
  // 14 · Leonardi (2012) · Repositório PUC-SP
  //    licença provável: Repositório PUC-SP; conferir termo de autorização
  14: [
    { arquivo: "14-1.jpg", figura: "Figura 6", legenda: "Sequência de empurrar o cubo do furo 3 ao furo 6, emitida pelo Sujeito 2 em 13 s numa sessão de treino.", licenca: "Repositório PUC-SP" },
    { arquivo: "14-2.jpg", figura: "Figura 1", legenda: "Posição dos furos na parede da câmara circular, da porta e do bebedouro.", licenca: "Repositório PUC-SP" },
  ],
  // 15 · Cook & Fowler (2014) · Animal Cognition
  //    licença provável: © Springer; usar com permissão ou como reuso do autor
  //    figuras citadas na auditoria: Figuras 1–4
  15: [
    { arquivo: "15-1.jpg", figura: "Fig. 3", legenda: "Trajetórias das caixas funcional e não funcional na arena hexagonal, por teste, para dois pombos.", licenca: "© Springer" },
  ],
  // 16 · Neves Filho et al. (2014) · Interação em Psicologia
  //    licença provável: Periódico de acesso aberto; conferir a licença no PDF
  //    figuras citadas na auditoria: Figuras 8–9 (pp. 346–347)
  16: [
    { arquivo: "16-1.jpg", figura: "Figura 5", legenda: "Câmara experimental: (1) abertura de acesso às ferramentas; (2) tablado onde as ferramentas eram dispostas.", licenca: "Acesso aberto · Interação em Psicologia" },
    { arquivo: "16-2.jpg", figura: "Figura 2", legenda: "Ferramentas encaixáveis (FE1 a FE5) usadas no treino de encaixar.", licenca: "Acesso aberto · Interação em Psicologia" },
    { arquivo: "16-3.jpg", figura: "Figura 8", legenda: "Sequência do segundo teste de insight de Louis, com o tempo de cada quadro, até a resolução do problema.", licenca: "Acesso aberto · Interação em Psicologia" },
  ],
  // 17 · Neves Filho et al. (2015) · European Journal of Behavior Analysis
  //    licença provável: © Taylor & Francis; usar com permissão ou como reuso do autor
  //    figuras citadas na auditoria: Figuras 2–3
  17: [
    { arquivo: "17-1.jpg", figura: "Figure 1", legenda: "A câmara de teste: (A) barreira de acrílico transparente; (B) passagem na barreira, coberta pela maravalha. O rato começava a sessão do lado sem escadas.", licenca: "© Taylor & Francis" },
    { arquivo: "17-2.jpg", figura: "Figure 2", legenda: "Diagrama da sessão de teste do sujeito S1, feito a partir do vídeo, do início da exploração até a resolução.", licenca: "© Taylor & Francis" },
  ],
  // 18 · Neves Filho et al. (2016a) · Animal Cognition
  //    licença provável: © Springer; usar com permissão ou como reuso do autor
  18: [
    { arquivo: "18-1.jpg", figura: "Fig. 1", legenda: "Esquema das ferramentas de treino e de teste dos Experimentos 1 e 2.", licenca: "© Springer" },
    { arquivo: "18-2.jpg", figura: "Fig. 3", legenda: "Situação de teste do Experimento 2: unir as duas peças da ferramenta e puxar a caixa translúcida com alimento.", licenca: "© Springer" },
    { arquivo: "18-3.jpg", figura: "Fig. 4", legenda: "Quadros de Eusébio resolvendo a tarefa final do Experimento 2 pela primeira vez.", licenca: "© Springer" },
  ],
  // 19 · Neves Filho et al. (2016b) · Perspectivas em Análise do Comportamento
  //    licença provável: Periódico de acesso aberto; conferir a licença no PDF
  19: [
    { arquivo: "19-1.jpg", figura: "Figura 1", legenda: "Caixa de teste: (A) placa de acrílico que dividia a caixa ao meio, com uma fresta junto ao piso coberta pela maravalha; (B) as duas escadas; (C) o recipiente com o cereal.", licenca: "Acesso aberto · Perspectivas em Análise do Comportamento" },
  ],
  // 20 · Dicezare (2017) · Teses e Dissertações USP
  //    licença provável: Repositório USP; conferir termo de autorização de reprodução
  20: [
    { arquivo: "20-1.jpg", figura: "Figura 2", legenda: "Divisória e cubo dentro da câmara de acrílico com piso de LEDs (luzes esquerda, meio e direita).", licenca: "Repositório USP" },
    { arquivo: "20-2.jpg", figura: "Figura 3", legenda: "Plataforma encaixada na abertura da parede e cubo posicionado perto dela.", licenca: "Repositório USP" },
  ],
  // 21 · Martins Filho (2017) · Teses e Dissertações USP
  //    licença provável: Reprodução autorizada com citação da fonte (dissertação; conferir a folha de rosto)
  //    figuras citadas na auditoria: Figura 8 e
  21: [
    { arquivo: "21-1.jpg", figura: "Figura 11", legenda: "Pedestal que mantinha o alimento suspenso no quintal.", licenca: "Dissertação; reprodução autorizada com citação da fonte" },
  ],
  // 22 · Santos (2017) · Repositório Institucional UFPA
  //    licença provável: Repositório UFPA; conferir termo de autorização
  //    figuras citadas na auditoria: Figuras 4–8
  22: [
    { arquivo: "22-1.jpg", figura: "Figura 1", legenda: "Instrumentos e materiais na configuração de treino e teste: câmara circular, controle do bebedouro, cubo e corrente.", licenca: "Repositório UFPA" },
    { arquivo: "22-2.jpg", figura: "Figura 3", legenda: "Fases do delineamento: treino ao bebedouro, puxar ou focinhar o spot, empurrar o cubo até o spot, puxar a corrente, subir e puxar a corrente, e a configuração do pré-teste e do teste.", licenca: "Repositório UFPA" },
    { arquivo: "22-3.jpg", figura: "Figura 4", legenda: "Trajeto do cubo até a resolução do problema pelo sujeito EpPs.", licenca: "Repositório UFPA" },
  ],
  // 23 · Araújo et al. (2019) · Revista Brasileira de Terapia Comportamental e Cognitiva
  //    licença provável: CC BY-NC 4.0 (padrão da RBTCC; conferir no PDF)
  23: [
    { arquivo: "23-1.jpg", figura: "Figura 1", legenda: "Gaiola de resolução de problemas: (A) placa de acrílico, (B) maravalha no fundo, (C) escadas, (D) plataforma com o alimento.", licenca: "CC BY-NC 4.0" },
  ],
  // 24 · Neves Filho et al. (2019) · International Journal of Comparative Psychology
  //    licença provável: CC BY 4.0 (eScholarship)
  //    figuras citadas na auditoria: Fig. 2; Figura 3
  24: [
    { arquivo: "24-1.jpg", figura: "Figure 2", legenda: "Situação de teste: o aparelho com comida (A) na gaiola C; a porta de pano roxo (B) entre as gaiolas; na gaiola B, duas caixas translúcidas (C), uma delas com três pedras.", licenca: "CC BY 4.0" },
    { arquivo: "24-2.jpg", figura: "Figure 1", legenda: "Comportamentos pré-requisito treinados no aviário, entre eles soltar a pedra no aparelho e abrir a porta.", licenca: "CC BY 4.0" },
  ],
  // 25 · Pessôa Neto et al. (2019) · Revista Brasileira de Terapia Comportamental e Cognitiva
  //    licença provável: CC BY-NC 4.0 (padrão da RBTCC; conferir no PDF)
  //    figuras citadas na auditoria: Figuras 2–5
  25: [
    { arquivo: "25-1.jpg", figura: "Figura 1", legenda: "Mapa de familiarização no editor do Portal 2, com emissor de laser, cubo, receptor e porta.", licenca: "CC BY-NC 4.0" },
    { arquivo: "25-2.jpg", figura: "Figura 3", legenda: "Sala de teste com o problema resolvido, na perspectiva do jogador.", licenca: "CC BY-NC 4.0" },
  ],
  // 26 · Teixeira et al. (2019) · Revista Brasileira de Terapia Comportamental e Cognitiva
  //    licença provável: CC BY-NC 4.0 (indicado no PDF)
  26: [
    { arquivo: "26-1.jpg", figura: "Figura 2", legenda: "Caixa de teste de cavar e escalar, com divisória, maravalha, escadas e plataforma.", licenca: "CC BY-NC 4.0" },
  ],
  // 27 · Borges et al. (2020) · Revista Brasileira de Terapia Comportamental e Cognitiva
  //    licença provável: CC BY-NC 4.0 (indicado no PDF)
  27: [
    { arquivo: "27-1.jpg", figura: "Figura 1", legenda: "Instrumentos e materiais na configuração de treino e teste: câmara circular, bebedouro e controle.", licenca: "CC BY-NC 4.0" },
    { arquivo: "27-2.jpg", figura: "Figura 3", legenda: "Disposição dos materiais na câmara em cada etapa do procedimento.", licenca: "CC BY-NC 4.0" },
  ],
  // 28 · Ferreira et al. (2020) · Acta Comportamentalia
  //    licença provável: Periódico de acesso aberto; conferir a licença no PDF
  //    figuras citadas na auditoria: Figura 6
  28: [
    { arquivo: "28-1.jpg", figura: "Figura 1", legenda: "Câmara experimental vista de cima, com os pontos do teto onde se prendia a barra ligada à argola.", licenca: "Acesso aberto · Acta Comportamentalia" },
    { arquivo: "28-2.jpg", figura: "Figura 3", legenda: "À esquerda, a argola com a bola de pingue-pongue; à direita, o alvo de cartolina fixado na parede.", licenca: "Acesso aberto · Acta Comportamentalia" },
  ],
  // 29 · Bradley & Johnson (2021) · The Psychological Record
  //    licença provável: © Springer; usar com permissão ou como reuso do autor
  29: [
    // sem figura extraída: o site mostra o esquema da tarefa
    // { arquivo: "29-1.jpg", figura: "Figura 1", legenda: "", licenca: "" },
  ],
  // 30 · Knaus (2021) · Teses e Dissertações USP
  //    licença provável: Repositório USP; conferir termo de autorização de reprodução
  30: [
    { arquivo: "30-1.jpg", figura: "Figura 1", legenda: "Caixa de cavar e escalar de Neves Filho et al. (2015).", licenca: "Repositório USP" },
    { arquivo: "30-2.jpg", figura: "Figura 2", legenda: "Caixa de cavar e escalar desenvolvida para o Experimento I (40 × 80 × 40 cm).", licenca: "Repositório USP" },
    { arquivo: "30-3.jpg", figura: "Figura 4", legenda: "Áreas usadas para classificar a posição das ratas durante o teste.", licenca: "Repositório USP" },
  ],
  // 31 · Neves Filho et al. (2021) · The Psychological Record
  //    licença provável: © Springer; usar com permissão ou como reuso do autor
  31: [
    { arquivo: "31-1.jpg", figura: "Fig. 1", legenda: "Esquema da câmara no teste de deslocamento de caixa: (A) comedouro, (B) caixa funcional, (C) alvo suspenso.", licenca: "© Springer" },
  ],
  // 32 · Silva Rodrigues & Garcia-Mijares (2021) · The Psychological Record
  //    licença provável: © Springer; usar com permissão ou como reuso do autor
  //    figuras citadas na auditoria: Figuras 1 e 4–7; Fig. 5
  32: [
    { arquivo: "32-1.jpg", figura: "Fig. 8", legenda: "Mapa das câmaras 2 e 3 no Portal 2.", licenca: "© Springer" },
    { arquivo: "32-2.jpg", figura: "Fig. 2", legenda: "Dinâmica cinética do Portal 2 e objetos usados no experimento.", licenca: "© Springer" },
  ],
  // 33 · Oliveira et al. (2022) · Revista Brasileira de Terapia Comportamental e Cognitiva
  //    licença provável: CC BY-NC 4.0 (padrão da RBTCC; conferir no PDF)
  33: [
    { arquivo: "33-1.jpg", figura: "Figura 2", legenda: "Caixa de teste: (A) placa de acrílico, (B) passagem submersa na maravalha, (C) plataforma após o primeiro lance de escadas, (D) plataforma com o alimento.", licenca: "CC BY-NC 4.0" },
    { arquivo: "33-2.jpg", figura: "Figura 1", legenda: "Caixa do treino discriminativo, com os dois suportes para o cereal.", licenca: "CC BY-NC 4.0" },
  ],
  // 34 · Quintana & Carvalho Neto (2022) · Revista Brasileira de Análise do Comportamento
  //    licença provável: CC BY-NC 4.0 (indicado no artigo)
  34: [
    { arquivo: "34-1.jpg", figura: "Figura 1", legenda: "Caixa de acrílico (70 × 40 × 40 cm): mecanismo de puxar a tampa com campainha, plataformas de grade, elevadores, divisória e escadas.", licenca: "CC BY-NC 4.0" },
    { arquivo: "34-2.jpg", figura: "Figura 3", legenda: "Diagrama da resolução por insight no Experimento 1: o rato mergulha, puxa a tampa, aciona a campainha e nada até a plataforma.", licenca: "CC BY-NC 4.0" },
  ],
  // 35 · Belo da Fonseca & Haydu (2023) · Revista Brasileira de Terapia Comportamental e Cognitiva
  //    licença provável: CC BY-NC 4.0 (indicado no PDF)
  35: [
    { arquivo: "35-1.jpg", figura: "Figura 1", legenda: "Exemplos de carta-missão, carta-problema, unidades de coragem e carta-ação.", licenca: "CC BY-NC 4.0" },
  ],
  // 36 · Pessôa Neto (2023) · Teses e Dissertações USP
  //    licença provável: Repositório USP; conferir termo de autorização de reprodução
  36: [
    { arquivo: "36-1.jpg", figura: "Figura 7", legenda: "Cadeia de resolução do problema com laser, na visão do participante: primeiro elo, segundo elo e solução.", licenca: "Repositório USP" },
    { arquivo: "36-2.jpg", figura: "Figura 2", legenda: "Vista isométrica das salas de familiarização.", licenca: "Repositório USP" },
    { arquivo: "36-3.jpg", figura: "Anexo C", legenda: "Folha com os controles do jogo entregue aos participantes.", licenca: "Repositório USP" },
  ],
  // 37 · Pessôa Neto et al. (2023) · The Psychological Record
  //    licença provável: © Springer; usar com permissão ou como reuso do autor
  //    figuras citadas na auditoria: Fig. 6; Fig. 8
  37: [
    { arquivo: "37-1.jpg", figura: "Fig. 3", legenda: "Vistas isométricas da sala de pré-teste e pós-teste; a figura reproduz material de Pessôa Neto et al. (2019).", licenca: "© Springer", credito: "Pessôa Neto et al. (2023), Fig. 3, reproduzida de Pessôa Neto et al. (2019)" },
  ],
  // 38 · Almeida (2024) · Repositório PUC-SP
  //    licença provável: Repositório PUC-SP; conferir termo de autorização
  //    figuras citadas na auditoria: Figs. 5–6 e; Figura 5
  38: [
    { arquivo: "38-1.jpg", figura: "Figura 6", legenda: "O sujeito F1 no minuto 1:21 do pós-teste, quando emite a resposta que resolve o problema.", licenca: "Repositório PUC-SP" },
    { arquivo: "38-2.jpg", figura: "Figura 1", legenda: "Vista superior da caixa experimental com o triângulo e o cubo.", licenca: "Repositório PUC-SP" },
  ],
  // 39 · Dicezare (2024) · Teses e Dissertações USP
  //    licença provável: Repositório USP; conferir termo de autorização de reprodução
  //    figuras citadas na auditoria: Figuras 4, 7, 9, 12 e 13
  39: [
    { arquivo: "39-1.jpg", figura: "Figura 5", legenda: "Vista da câmara com o alimentador do Experimento 1b.", licenca: "Repositório USP" },
    { arquivo: "39-2.jpg", figura: "Figura 2", legenda: "Câmara para o treino de subir na caixa e na plataforma; a plataforma (em cinza) encaixa na abertura da tampa.", licenca: "Repositório USP" },
    { arquivo: "39-3.jpg", figura: "Figura 14", legenda: "Diagrama das classes treinadas por Borges et al. (2020): caixa, luz, respostas e consequência.", licenca: "Repositório USP" },
  ],
  // 40 · Lottermann (2025) · Repositório UEL
  //    licença provável: Repositório UEL; conferir termo de autorização
  //    figuras citadas na auditoria: Figuras 5–7
  40: [
    { arquivo: "40-1.jpg", figura: "Figura 4", legenda: "Caixa experimental de cavar e escalar, com maravalha, divisória e escada.", licenca: "Repositório UEL" },
    { arquivo: "40-2.jpg", figura: "Figura 3", legenda: "Caixa-viveiro do grupo de ambiente enriquecido.", licenca: "Repositório UEL" },
  ],
  // 41 · Neves Filho et al. (2025) · Revista Brasileira de Análise do Comportamento
  //    licença provável: CC BY-NC 4.0 (indicado no artigo)
  //    figuras citadas na auditoria: Figuras 1–2
  41: [
    { arquivo: "41-1.jpg", figura: "Figura 2", legenda: "Terceiro teste de deslocamento de caixa com P3: a caixa, a argola-alvo e a luz verde.", licenca: "CC BY-NC 4.0" },
  ],
  // 42 · Silva Rodrigues & Garcia-Mijares (2025) · The Psychological Record
  //    licença provável: © Springer; usar com permissão ou como reuso do autor
  //    figuras citadas na auditoria: Figuras 9–11
  42: [
    { arquivo: "42-1.jpg", figura: "Fig. 3", legenda: "Fase de comandos básicos: (a) mapa da câmara 1; (b) tela do jogador na entrada.", licenca: "© Springer" },
    { arquivo: "42-2.jpg", figura: "Fig. 1", legenda: "Dinâmica cinética do Portal 2 e objetos apresentados no experimento.", licenca: "© Springer" },
  ],
  // 43 · Silva Rodrigues et al. (2026) · Journal of the Experimental Analysis of Behavior
  //    licença provável: © Wiley/SEAB; conferir se o artigo é de acesso aberto
  43: [
    { arquivo: "43-1.jpg", figura: "Figure 3", legenda: "Herriot jogando na tela sensível ao toque durante a Fase de Treino 1. No detalhe, telas sem e com barreiras.", licenca: "© Wiley/SEAB" },
    { arquivo: "43-2.jpg", figura: "Figure 1", legenda: "Fluxograma do treino em cadeia: navegação, uso de portais e teste com quebra-cabeças novos.", licenca: "© Wiley/SEAB" },
    { arquivo: "43-3.jpg", figura: "Figure 6", legenda: "Trajetos da primeira tentativa nos quebra-cabeças I a V, para cada pombo.", licenca: "© Wiley/SEAB" },
  ],
};
