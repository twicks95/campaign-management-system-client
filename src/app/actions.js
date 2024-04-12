'use server'

import { redirect, permanentRedirect } from 'next/navigation'

export async function navigate(data) {
    redirect(`/posts/${data.get('id')}`)
}

export async function navigateToLogin(data) {
    redirect(`/authentication/login`)
}

export async function navigateToRegister(data) {
    redirect(`/authentication/register`)
}

export async function navigateToDashboard(data) {
    permanentRedirect(`/dashboard`)
}

export async function navigateToCampaign(data) {
    permanentRedirect(`/campaign`)
}

export async function navigateToTemplate(data) {
    redirect(`/template`)
}

export async function navigateToCalendar(data) {
    redirect(`/calendar`)
}

export async function navigateToSettings(section) {
    section ? redirect(`/settings?section=${section}`) : redirect(`/settings?section=profile`)
}

export async function navigateToHelp(data) {
    redirect(`/help`)
}

export async function navigateToDocumentation(data) {
    redirect(`/documentation`)
}