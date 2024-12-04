const graph = {
    0: [1, 2],
    1: [3, 4],
    2: [5, 6],
    3: [],
    4: [],
    5: [],
    6: []
  };
  const positions = {
    0: { x: 250, y: 50 },
    1: { x: 150, y: 150 },
    2: { x: 350, y: 150 },
    3: { x: 100, y: 250 },
    4: { x: 200, y: 250 },
    5: { x: 300, y: 250 },
    6: { x: 400, y: 250 }
  };
  let visited = new Set();
  
  const graphSvg = document.getElementById("graph-svg");
  const nodesContainer = document.getElementById("nodes-container");
  const message = document.getElementById("message");
  
  function createGraph() {
    graphSvg.innerHTML = "";
    nodesContainer.innerHTML = "";
  
    // Draw edges
    for (let node in graph) {
        for (let neighbor of graph[node]) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", positions[node].x);
            line.setAttribute("y1", positions[node].y);
            line.setAttribute("x2", positions[neighbor].x);
            line.setAttribute("y2", positions[neighbor].y);
            line.setAttribute("stroke", "#90caf9");
            line.setAttribute("stroke-width", "2");
            graphSvg.appendChild(line);
        }
    }
  
    // Draw nodes
    for (let node in positions) {
        const div = document.createElement("div");
        div.className = "node";
        div.id = `node-${node}`;
        div.textContent = node;
        div.style.left = `${positions[node].x}px`;
        div.style.top = `${positions[node].y}px`;
        nodesContainer.appendChild(div);
    }
  
    message.textContent = "Graph created. Click 'Start BFS' to begin.";
  }
  
  async function bfs(start) {
    const queue = [start];
    visited.add(start);
  
    document.getElementById(`node-${start}`).classList.add("visited");
    message.textContent = `Starting BFS from node ${start}`;
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    while (queue.length > 0) {
        const current = queue.shift();
        message.textContent = `Visiting node ${current}`;
        await new Promise(resolve => setTimeout(resolve, 500));
  
        for (let neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
                visited.add(neighbor);
  
                const node = document.getElementById(`node-${neighbor}`);
                node.classList.add("visited");
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        }
    }
  
    message.textContent = "🎉 BFS completed!";
  }
  
  function startBFS() {
    if (visited.size === 0) {
        bfs(0); // Start BFS from node 0
    } else {
        message.textContent = "Graph already traversed. Reset to run again.";
    }
  }
  
  function resetGraph() {
    visited = new Set();
    createGraph();
  }
  
  // Initialize
  createGraph();