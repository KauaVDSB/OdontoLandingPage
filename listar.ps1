$ignorar = @('venv', '.venv', '__pycache__')

function Listar-Arvore($pasta, $prefixo = "") {
    $items = Get-ChildItem -LiteralPath $pasta | Where-Object { $_.Name -notin $ignorar }

    for ($i = 0; $i -lt $items.Length; $i++) {
        $item = $items[$i]
        $simbolo = if ($i -eq $items.Length - 1) { "|-- " } else { "|-- " }
        Write-Output "$prefixo$simbolo$item"
        
        if ($item.PSIsContainer) {
            $novoPrefixo = "$prefixo|   "
            Listar-Arvore $item.FullName $novoPrefixo
        }
    }
}

Write-Output "."
Listar-Arvore "."
