// example.js

// Simuliere eine Verzögerung von 5 Sekunden
setTimeout(() => {
    // Erstellen einer HTML-Datenstruktur (nur als Beispiel)
    const htmlData = '<div><h1>HTML-Daten erfolgreich geladen</h1><p>Dies ist ein Beispiel für HTML-Daten in example.js file.</p></div>';
  
    // Daten, die an das Promise geliefert werden sollen
    const data = { htmlData: htmlData };
  
    // Senden der Daten an das Promise
    postMessage(data);
  }, 5000);