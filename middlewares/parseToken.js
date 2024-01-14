// Fonction pour décoder et analyser un JSON Web Token (JWT)
const parseJwt = (token) => {
  // Vérifie si le token est fourni
  if (!token) { 
    return;  // Si le token n'est pas fourni, retourne undefined
  }

  // Extrait le payload du JWT (la deuxième partie)
  const base64Url = token.split('.')[1];

  // Remplace les caractères non autorisés dans l'encodage base64 URL
  const base64 = base64Url.replace('-', '+').replace('_', '/');

  // Décode le payload encodé en base64 et le parse en tant que JSON
  // La fonction "atob" en JavaScript est utilisée pour décoder une chaîne de caractères encodée en base64. Le nom "atob" signifie "ASCII to Binary". Elle prend une chaîne de caractères encodée en base64 et renvoie la version décryptée.
  return JSON.parse(atob(base64));
}

export default parseJwt;