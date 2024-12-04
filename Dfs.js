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
  
    message.textContent = "Graph created. Click 'Start DFS' to begin.";
  }
  
  async function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);
  
    const currentNode = document.getElementById(`node-${node}`);
    currentNode.classList.add("visited");
    message.textContent = `Visiting node ${node}`;
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    for (let neighbor of graph[node]) {
        await dfs(neighbor);
    }
  }
  
  async function startDFS() {
    if (visited.size === 0) {
        message.textContent = "Starting DFS...";
        await dfs(0); // Start DFS from node 0
        message.textContent = "🎉 DFS completed!";
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