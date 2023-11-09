function isAnagram(test, original) {
    // Convertir les chaînes en minuscules
    test = test.toLowerCase();
    original = original.toLowerCase();
  
    // Vérifier si les chaînes ont la même longueur
    if (test.length !== original.length) {
      return false;
    }
  
    // Créer des objets pour compter les occurrences des caractères dans les deux chaînes
    const testCharCount = {};
    const originalCharCount = {};
  
    // Compter les occurrences de chaque caractère dans la première chaîne
    for (let char of test) {
      testCharCount[char] = (testCharCount[char] || 0) + 1;
    }
  
    // Compter les occurrences de chaque caractère dans la deuxième chaîne
    for (let char of original) {
      originalCharCount[char] = (originalCharCount[char] || 0) + 1;
    }
  
    // Vérifier si les objets de comptage sont identiques
    for (let char in testCharCount) {
      if (testCharCount[char] !== originalCharCount[char]) {
        return false;
      }
    }
  
    return true;
  }
  