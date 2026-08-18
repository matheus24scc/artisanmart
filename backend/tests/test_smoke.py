"""Basic smoke tests for the ArtisanMart FastAPI backend.

These tests boot the ASGI app in-process (no external services required) and
verify (1) the app imports and wires the auth router and (2) the health
endpoint responds. Full auth/user flows require a live PostgreSQL database
(engine URL in app/db/base.py) and are intentionally not exercised here.
"""
import main
from fastapi.testclient import TestClient


def test_app_imports_and_wires_auth_router():
    paths = main.app.openapi()["paths"]
    auth_paths = [p for p in paths if p.startswith("/api/v1/auth")]
    assert auth_paths, "auth router was not mounted"
    for expected in ("/api/v1/auth/register", "/api/v1/auth/token",
                      "/api/v1/auth/users/me"):
        assert expected in paths, f"missing route {expected}"


def test_health_endpoint():
    client = TestClient(main.app)
    resp = client.get("/health")
    assert resp.status_code == 200
    body = resp.json()
    assert body["status"] == "healthy"
    assert body["service"] == "artisanmart-api"
